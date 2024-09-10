import {
  authState,
  signInWithPopup,
  signOut,
  getAuth,
} from '@angular/fire/auth';
import { map, switchMap, firstValueFrom, filter, Observable } from 'rxjs';
import {
  doc,
  docData,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  deleteDoc,
  collectionData,
  Timestamp,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
  FieldValue,
} from '@angular/fire/firestore';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { getToken, onMessage } from '@angular/fire/messaging';

type ChatMessage = {
  name: string | null,
  profilePicUrl: string | null,
  timestamp: FieldValue,
  uid: string | null,
  text?: string,
  imageUrl?: string
};


