import "./contacts-mail.css";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const ContactsMail = ({ firstName, lastName, email, phoneNumber, message }: Props) => {
  return (
    <div className="container">
      <p>
        First name: <b>{firstName}</b>
      </p>
      <p>
        Last name: <b>{lastName}</b>
      </p>
      <p>
        Email address: <b>{email}</b>
      </p>
      <p>
        Phone number: <b>{phoneNumber}</b>
      </p>
      <div className="divider"></div>
      <p>{message}</p>
    </div>
  );
};
