import mysql.connector
# pip install mysql-connector-python

# sql code for creating your db
'''
create database contactList2;
use contactList2;

create table contacts(
	id int primary key auto_increment,
    fullName varchar(255),
    phone varchar(15),
    email varchar(100)
);
'''

# Database Config
db_config = {
    'user': 'root',
    'password': 'RootRoot',
    'host': 'localhost', # 127.0.0.1
    'database': 'contactlist2'
}

class Contact:
    def __init__(self, id, fullName, phone, email):
        self.contact_id = id
        self.fullName = fullName
        self.phone = phone
        self.email = email

    def __str__(self):
        return f"Name: {self.fullName}, Phone: {self.phone}, Email: {self.email}"

class ContactList:
    def __init__(self):
        self.conn = mysql.connector.connect(**db_config)
        self.cursor = self.conn.cursor(dictionary=True)
        self.contacts = []


    def create_contact(self, fullName, phone, email):
        sql = "insert into contacts(fullName, phone, email) values(%s, %s, %s)"
        self.cursor.execute(sql, (fullName, phone, email))
        self.conn.commit()
        new_contact = Contact(self.cursor.lastrowid, fullName, phone, email)
        self.contacts.append(new_contact)
        print("Contact added successfully.")

    def read_contacts(self):
        self.cursor.execute("Select * from contacts")
        self.contacts = self.cursor.fetchall()
        if not self.contacts:
            print("No contacts found.")
        else:
            for contact in self.contacts:
                print(contact)

    def update_contact(self, contact_id, new_fullName=None, new_phone=None, new_email=None):
        pass

    def delete_contact(self, contact_id):
        pass
  

def main():
    contact_list = ContactList()

    while True:
        print("\nContact List Menu:")
        print("1. Add Contact")
        print("2. View Contacts")
        print("3. Update Contact")
        print("4. Delete Contact")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            fullName = input("Enter name: ")
            phone = input("Enter phone: ")
            email = input("Enter email: ")
            contact_list.create_contact(fullName, phone, email)
        elif choice == '2':
            contact_list.read_contacts()
        elif choice == '3':
            contact_id = input("Enter the contact id of the contact to update: ")
            new_fullName = input("Enter new full name (leave blank to keep current): ")
            new_phone = input("Enter new phone (leave blank to keep current): ")
            new_email = input("Enter new email (leave blank to keep current): ")
            contact_list.update_contact(contact_id, new_fullName if new_fullName else None, new_phone if new_phone else None, new_email if new_email else None)
        elif choice == '4':
            contact_id = input("Enter the contact ID of the contact to delete: ")
            contact_list.delete_contact(contact_id)
        elif choice == '5':
            print("Exiting the application.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
