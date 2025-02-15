export class Observer {
	constructor() {
		this.observers = [];
		this.notificationQueue = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	queueNotification(phoneNumber) {
		this.notificationQueue.push(phoneNumber);
		clearTimeout(this.notificationTimeout);
		this.notificationTimeout = setTimeout(() => this.notify(), 1000);
	}

	notify() {
		while (this.notificationQueue.length > 0) {
			const phoneNumber = this.notificationQueue.shift();
			for (const observer of this.observers) {
				observer.update(phoneNumber);
			}
		}
	}

	update(phoneNumber) {
		throw new Error("subclass must be implement this method");
	}
}

export class DisplayPhoneNumberObserver extends Observer {
	update(phoneNumber) {
		console.log(`Phone Number dialed: ${phoneNumber}`);
	}
}

export class DialingPhoneNumberObserver extends Observer {
	update(phoneNumber) {
		console.log(`Now Dialling 2347023232`);
	}
}
