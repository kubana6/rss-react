import React, { Component, createRef } from "react";
import { Input } from "../../components/FormElements/Input/Input";
import { DateInput } from "../../components/FormElements/DateInput/DateInput";
import Button from "../../components/Button/Button";
import { validateBirthday } from "../../helpers/date";
import Select from "../../components/FormElements/Select/Select";
import RadioButton from "../../components/FormElements/RadioButton/RadioButton";
import { countries } from "../../constants";
import { errorsForm } from "./type";

import "./Form.scss";

enum validationMessage {
  REQUIRED = "field must not be empty",
  MIN_AGE = "minimum age 18",
}

const initialErrors = {
  firstName: [],
  lastName: [],
  birthDay: [],
  country: [],
};

export class Form extends Component {
  firstNameRef = createRef<HTMLInputElement>();
  lastNameRef = createRef<HTMLInputElement>();
  birthDayRef = createRef<HTMLInputElement>();
  countryRef = createRef<HTMLSelectElement>();
  manRef = createRef<HTMLInputElement>();
  womanRef = createRef<HTMLInputElement>();

  state = {
    errors: initialErrors,
  };

  onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.birthDayRef);
    let hasErors = false;
    const errors: errorsForm = structuredClone(initialErrors);

    if (!this.firstNameRef.current?.value) {
      hasErors = true;
      errors.firstName = [validationMessage.REQUIRED];
    }

    if (!this.lastNameRef.current?.value) {
      hasErors = true;
      errors.lastName = [validationMessage.REQUIRED];
    }

    if (!this.countryRef.current?.value) {
      hasErors = true;
      errors.country = [validationMessage.REQUIRED];
    }

    if (!this.birthDayRef.current?.value) {
      hasErors = true;
      errors.birthDay = [validationMessage.REQUIRED];
    } else {
      const isValidBirthday = validateBirthday(this.birthDayRef.current.value);

      if (!isValidBirthday) {
        hasErors = true;
        errors.birthDay = [validationMessage.MIN_AGE];
      }
    }

    if (hasErors) {
      this.setState({ errors });
    }
  };

  render(): React.ReactNode {
    const {
      errors: {
        firstName: firstNameErrors,
        lastName: lastNameErrors,
        birthDay: birthDayErrors,
        country: countryErrors,
      },
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

          <fieldset className="gender">
            <RadioButton
              classNameWrapper="mt-2"
              labelName="man"
              value="man"
              refObject={this.manRef}
              name="gender"
            />

            <RadioButton
              classNameWrapper="mt-2"
              labelName="woman"
              value="woman"
              refObject={this.womanRef}
              name="gender"
            />
          </fieldset>

          <Button className="mt-2" color="secondary" type="submit">
            Submit
          </Button>
        </form>
        <div></div>
      </section>
    );
  }
}
