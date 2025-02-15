import { Observer } from "./observer.mjs";
class Telephone {
	constructor() {
		if (Telephone.instance) {
			return Telephone.instance;
		}

		this.phoneNumbers = new Set();
		this.observers = new Observer();
		Telephone.instance = this;
	}

	static getInstance() {
		if (!Telephone.instance) {
			Telephone.instance = new Telephone();
		}
		return Telephone.instance;
	}

	addPhoneNumber(phoneNumber) {
		this.phoneNumbers.add(phoneNumber);
        // this.observers.queueNotification(phoneNumber);
	}

	removePhoneNumber(phoneNumber) {
		this.phoneNumbers.delete(phoneNumber);
        // this.observers.queueNotification(phoneNumber);
	}

	dialPhoneNumber(phoneNumber) {
		if (this.phoneNumbers.has(phoneNumber)) {
			this.observers.queueNotification(phoneNumber);
		} else {
			console.log(`Phone number ${phoneNumber} not in contact list`);
		}
	}
}

export default Telephone;
