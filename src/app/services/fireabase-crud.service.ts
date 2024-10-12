
import { Injectable, inject } from '@angular/core';

import {
  Firestore
} from '@angular/fire/firestore';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc
} from 'firebase/firestore';

import { Observable, from } from 'rxjs';

import { MessageData } from '../types/MessageData';


@Injectable({ providedIn: 'root' })

export class FireabaseCRUDService {

  // firestore = inject(Firestore);

  // messageCollection = collection(
  //   this.firestore,
  //   'chat-app-project/chat-message-container/'
  // );

  // getMessage(): Observable<MessageData[]> {

  //   return collectionData(this.messageCollection, {
  //     idField: 'id',
  //   }) as Observable<MessageData[]>;
  // }

  // addMessage( messageData : MessageData ): Observable<any> {
  //   // const messageToAddToDB = {
  //   //   text, isCompleted: false
  //   // };


  //   const dataSave = {
  //     testing: "testing data"
  //   };
  //   const promise = addDoc(
  //     this.messageCollection,
  //     dataSave
  //   ).then(
  //     (response) => {console.log(response), dataSave }
  //   );

  //   return from(promise);
  // }

  // removeMessage(todoId: string): Observable<void> {
  //   const docRef = doc(this.firestore, 'todos/' + todoId);
  //   const promise = deleteDoc(docRef);
  //   return from(promise);
  // }

  // updateMessage(
  //   todoId: string,
  //   dataToUpdate: { text: string; isCompleted: boolean }
  // ): Observable<void> {
  //   const docRef = doc(this.firestore, 'todos/' + todoId);
  //   const promise = setDoc(docRef, dataToUpdate);
  //   return from(promise);
  // }
}
