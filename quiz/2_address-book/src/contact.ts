import {PhoneNumberDictionary} from './phone-number-dictionary'

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}