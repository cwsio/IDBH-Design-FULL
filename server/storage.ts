import { db } from "./db";
import {
  contacts,
  type CreateContactRequest,
  type Contact
} from "@shared/schema";

export interface IStorage {
  createContact(contact: CreateContactRequest): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: CreateContactRequest): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }
}

export const storage = new DatabaseStorage();
