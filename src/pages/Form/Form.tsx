import React, { Component, createRef } from "react";
import { Input } from "../../components/FormElements/Input/Input";
import { DateInput } from "../../components/FormElements/DateInput/DateInput";
import Button from "../../components/Button/Button";
import { validateBirthday } from "../../helpers/date";
import Select from "../../components/FormElements/Select/Select";
import RadioButton from "../../components/FormElements/RadioButton/RadioButton";
import { FileUpload } from "../../components/FormElements/FileUpload/FileUpload";
import { UserCard } from "../../components/UserCard/UserCard";
import { Checkbox } from "../../components/FormElements/Checkbox/Checkbox";
import { countries } from "../../constants";
import { CardsForm, errorsForm, State } from "./type";

import "./Form.scss";

enum validationMessage {
  REQUIRED = "field must not be empty",
  MIN_AGE = "minimum age 18",
  ACCEPT = "is required",
}

const initialErrors = {
  firstName: [],
  lastName: [],
  birthDay: [],
  country: [],
  gender: [],
  avatar: [],
  accept: [],
};

export class Form extends Component<Record<string, never>, State> {
  firstNameRef = createRef<HTMLInputElement>();
  lastNameRef = createRef<HTMLInputElement>();
  birthDayRef = createRef<HTMLInputElement>();
  countryRef = createRef<HTMLSelectElement>();
  manRef = createRef<HTMLInputElement>();
  womanRef = createRef<HTMLInputElement>();
  avatarRef = createRef<HTMLInputElement>();
  acceptRef = createRef<HTMLInputElement>();
  timeout = null;

  state = {
    cards: [],
    errors: initialErrors,
    isActiveMessage: false,
  };

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErors = false;
    const cardData = {} as CardsForm;
    const errors: errorsForm = structuredClone(initialErrors);

    if (!this.firstNameRef.current?.value) {
      hasErors = true;
      errors.firstName = [validationMessage.REQUIRED];
    } else {
      cardData.firstName = this.firstNameRef.current?.value;
    }

    if (!this.lastNameRef.current?.value) {
      hasErors = true;
      errors.lastName = [validationMessage.REQUIRED];
    } else {
      cardData.lastName = this.lastNameRef.current?.value;
    }

    if (!this.countryRef.current?.value) {
      hasErors = true;
      errors.country = [validationMessage.REQUIRED];
    } else {
      cardData.country = this.countryRef.current?.value;
    }

    if (!this.womanRef.current?.checked && !this.manRef.current?.checked) {
      hasErors = true;
      errors.gender = [validationMessage.REQUIRED];
    } else {
      cardData.gender = this.womanRef.current?.checked ? "woman" : "man";
    }

    if (!this.avatarRef.current?.value) {
      hasErors = true;
      errors.avatar = [validationMessage.REQUIRED];
    } else if (this.avatarRef.current.files) {
      const file = this.avatarRef.current.files[0];
      const avatar = (await this.readFile(file)) as string;
      cardData.avatar = avatar;
    }

    if (!this.birthDayRef.current?.value) {
      hasErors = true;
      errors.birthDay = [validationMessage.REQUIRED];
    } else {
      const birthDay = this.birthDayRef.current.value;
      const isValidBirthday = validateBirthday(birthDay);

      if (!isValidBirthday) {
        hasErors = true;
        errors.birthDay = [validationMessage.MIN_AGE];
      } else {
        cardData.birthDay = birthDay;
      }
    }

    if (!this.acceptRef.current?.checked) {
      hasErors = true;
      errors.accept = [validationMessage.ACCEPT];
    }

    if (hasErors) {
      this.setState({ errors });
      return;
    }
    console.log(cardData);
    this.setState({ cards: [...this.state.cards, cardData], isActiveMessage: true });
  };

  finishForm() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    setTimeout(() => {
      this.setState({ isActiveMessage: false });
    });
  }

  async readFile(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  render(): React.ReactNode {
    const {
      errors: {
        firstName: firstNameErrors,
        lastName: lastNameErrors,
        birthDay: birthDayErrors,
        country: countryErrors,
        gender: genderErrors,
        avatar: avatarErrors,
        accept: acceptErrors,
      },
      cards = [],
    } = this.state;

    return (
      <section className="form-page">
        <form className="form" onSubmit={this.onSubmit}>
          <Input
            id="firstName"
            labelName="First Name"
            errors={firstNameErrors}
            refObject={this.firstNameRef}
            classNameWrapper="mt-2"
          />

          <Input
            id="lastName"
            labelName="Last Name"
            errors={lastNameErrors}
            refObject={this.lastNameRef}
            classNameWrapper="mt-2"
          />

          <DateInput
            id="birtDayDate"
            classNameWrapper="mt-2"
            errors={birthDayErrors}
            labelName="Birth Day"
            refObject={this.birthDayRef}
          />

          <Select
            id="country"
            classNameWrapper="mt-2"
            options={countries}
            labelName="Your Country"
            refObject={this.countryRef}
            errors={countryErrors}
          />

          <fieldset className="gender mt-2">
            <span>Your gender: </span>
            <div className="gender-inputs">
              <RadioButton
                classNameWrapper="mt-2"
                labelName="man"
                refObject={this.manRef}
                name="gender"
              />

              <RadioButton
                classNameWrapper="mt-2"
                labelName="woman"
                refObject={this.womanRef}
                name="gender"
              />
            </div>
            {genderErrors.map((error) => (
              <span key={error} className="form-error">
                {error}
              </span>
            ))}
          </fieldset>

          <FileUpload
            accept=".jpg,.png,.gif"
            id="avatar"
            labelName="Avatar"
            errors={avatarErrors}
            refObject={this.avatarRef}
            classNameWrapper="mt-2"
          />

          <fieldset className="accept mt-2">
            <div className="accept-input">
              <Checkbox
                name="accept"
                labelName="I consent to my personal data' field list of extra presents"
                refObject={this.acceptRef}
              />
            </div>

            {acceptErrors.map((error) => (
              <span key={error} className="form-error">
                {error}
              </span>
            ))}
          </fieldset>

          <Button className="mt-2" color="secondary" type="submit">
            Submit
          </Button>
        </form>

        <div className="form-page-content">
          {cards.map((card: CardsForm) => (
            <UserCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    );
  }
}
