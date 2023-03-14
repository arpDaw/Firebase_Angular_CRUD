import { Injectable } from '@angular/core';
import { 
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc
} from '@angular/fire/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Company } from 'src/app/features/companies/interfaces/company.interface';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore:Firestore) { 
    this.companyCollection = collection(this.firestore, 'company');
  }

  getAll(){
    return collectionData(this.companyCollection, {
      idField: 'id',
    }) as Observable<Company[]>
  }

  get(id:string){
    const companyDocumentReference = doc(this.firestore, `company/${id}`);
    return docData(companyDocumentReference, {idField:'id'});
  }

  create(company: Company){
    return addDoc(this.companyCollection, company);
  }

  update(company: Company){
    const companyDocumentReference = doc(
      this.firestore,
      `company/${company.id}`
    );
    return updateDoc(companyDocumentReference, {...company});
  }

  delete(id:string){
    const companyDocumentReference = doc(this.firestore, `company/${id}`);
    return deleteDoc(companyDocumentReference);
  }
}
