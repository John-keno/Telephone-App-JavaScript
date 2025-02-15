import Telephone from "./telephone.mjs";
import {
	DisplayPhoneNumberObserver,
	DialingPhoneNumberObserver,
} from "./observer.mjs";

// Create the telephone instance
const telephone = Telephone.getInstance();

// Add phone numbers
telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("2347033344");

// Create observers
const dialingPhoneNumber = new DialingPhoneNumberObserver();
const displayPhoneNumber = new DisplayPhoneNumberObserver();

const observer = telephone.observers;

// Add observers to the telephone
observer.subscribe(displayPhoneNumber);
observer.subscribe(dialingPhoneNumber);

// Dial a phone number
telephone.dialPhoneNumber("2347023232");
