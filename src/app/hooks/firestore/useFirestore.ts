import { useCallback, useEffect, useRef } from "react"
import { useAppDispatch } from "../../store/store"
import { GenericActions } from "../../store/genericSlice"
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore"
import { db } from "../../config/firebase"

type ListnerState = {
    name?: string 
    unsubscribe: () => void
}

export const useFireStore = <T> (path: string) => {
    const listnersRef = useRef<ListnerState[]>([]);

    useEffect(() => {
        let listnerRefvalue: ListnerState[] | null;

        if(listnersRef.current) {
            listnerRefvalue = listnersRef.current;
        }

        return () => {
            if(listnerRefvalue) {
                listnerRefvalue.forEach(listner => {
                    listner.unsubscribe();
                })
            }
        }
    }, [])

    const dispatch = useAppDispatch();

    const loadCollection = useCallback((actions: GenericActions<T>) => {
        dispatch(actions.loading());

        const query = collection(db, path);

        const listner = onSnapshot(query, {
            next: querySnapshot => {
                const data: DocumentData[] = [];
                if(querySnapshot.empty) {
                    dispatch(actions.success([] as unknown as T))
                    return null;
                }
                querySnapshot.forEach(doc => {
                    data.push({id: doc.id, ...doc.data()})
                })
                dispatch(actions.success(data as unknown as T))
            },
            error: error => {
                dispatch(actions.error(error.message))
                console.log('Collection error:', error.message)
            }
        })
        listnersRef.current.push({name: path, unsubscribe: listner});

    }, [dispatch, path])

    const loadDocument = useCallback((id: string, actions: GenericActions<T>) => {
        dispatch(actions.loading());
        const docRef = doc(db, path, id);

        const listner = onSnapshot(docRef, {
            next: doc => {
                if(!doc.exists) {
                    dispatch(actions.error('Document does not exist!'));
                    return null;
                }
                dispatch(actions.success({id: doc.id, ...doc.data()} as unknown as T))
            }
        })
        listnersRef.current.push({name: path + '/' + id, unsubscribe: listner})
    }, [dispatch, path])

    return {loadCollection, loadDocument}
}