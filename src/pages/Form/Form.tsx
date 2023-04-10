import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/FormElements/Input/Input";
import { DateInput } from "../../components/FormElements/DateInput/DateInput";
import Button from "../../components/Button/Button";
import { validateBirthday } from "../../helpers/date";
import { readFile } from "../../helpers/file";
import { Select } from "../../components/FormElements/Select/Select";
import { RadioButton } from "../../components/FormElements/RadioButton/RadioButton";
import { FileUpload } from "../../components/FormElements/FileUpload/FileUpload";
import { UserCard } from "../../components/UserCard/UserCard";
import { Checkbox } from "../../components/FormElements/Checkbox/Checkbox";
import { countries } from "../../constants";
import { CardsForm, FormFields } from "./type";

import "./Form.scss";

enum validationMessage {
  REQUIRED = "field must not be empty",
  MIN_AGE = "minimum age 18",
  ACCEPT = "is required",
}

const dateValidate = {
  isAllowedDate: (value: string) => validateBirthday(value) || validationMessage.MIN_AGE,
};

export const Form = () => {
  const [cards, setCards] = useState<CardsForm[] | []>([]);
  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormFields>();

  const finishForm = useCallback(() => {
    setIsActiveMessage(true);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setIsActiveMessage(false);
      reset();
    }, 2000);
  }, [setIsActiveMessage, reset]);

  const onSubmit = useCallback(
    async (data: FormFields) => {
      if (isActiveMessage) {
        return;
      }

      const { avatar, ...rest } = data;

      try {
        const preparedAvatarLink = (await readFile(avatar[0])) as string;
        setCards((cards) => [
          ...cards,
          { id: cards.length + 1, ...rest, avatar: preparedAvatarLink },
        ]);
        finishForm();
      } catch (error) {
        setError("avatar", { type: "custom", message: "the image is not valid" });
      }
    },
    [setCards, setError, finishForm, isActiveMessage]
  );

  console.log(errors);
  return (
    <section className="form-page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="firstName"
          labelName="First Name"
          {...register("firstName", {
            required: validationMessage.REQUIRED,
          })}
          error={errors.firstName?.message}
          classNameWrapper="mt-2"
        />

        <Input
          id="lastName"
          labelName="Last Name"
          {...register("lastName", { required: validationMessage.REQUIRED })}
          error={errors.lastName?.message}
          classNameWrapper="mt-2"
        />

        <DateInput
          id="birthDayDate"
          classNameWrapper="mt-2"
          error={errors.birthDay?.message}
          {...register("birthDay", {
            required: validationMessage.REQUIRED,
            validate: dateValidate,
          })}
          labelName="Birth Day"
        />

        <Select
          id="country"
          classNameWrapper="mt-2"
          options={countries}
          labelName="Your Country"
          {...register("country", {
            required: validationMessage.REQUIRED,
          })}
          error={errors.country?.message}
        />

        <fieldset className="gender mt-2">
          <span>Your gender: </span>
          <div className="gender-inputs">
            <RadioButton
              classNameWrapper="mt-2"
              labelName="man"
              value="man"
              {...register("gender", {
                required: validationMessage.REQUIRED,
              })}
            />

            <RadioButton
              classNameWrapper="mt-2"
              labelName="woman"
              value="woman"
              {...register("gender", {
                required: validationMessage.REQUIRED,
              })}
            />
          </div>
          {errors.gender && <span className="form-error">{errors.gender.message}</span>}
        </fieldset>

        <FileUpload
          accept=".jpg,.png,.gif"
          id="avatar"
          labelName="Avatar"
          error={errors.avatar?.message}
          {...register("avatar", {
            required: validationMessage.REQUIRED,
          })}
          classNameWrapper="mt-2"
        />

        <fieldset className="accept mt-2">
          <div className="accept-input">
            <Checkbox
              labelName="I consent to my personal data' field list of extra presents"
              {...register("accept", {
                required: validationMessage.REQUIRED,
              })}
            />
          </div>

          {errors.accept && <span className="form-error">{errors.accept.message}</span>}
        </fieldset>

        <Button disabled={isActiveMessage} className="mt-2" color="secondary" type="submit">
          Submit
        </Button>
        {isActiveMessage && <p className="form-message">form has been successfully filled out !</p>}
      </form>

      <div className="form-page-content">
        {cards.map((card: CardsForm) => (
          <UserCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
