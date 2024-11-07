interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const ContactsMail = ({ firstName, lastName, email, phoneNumber, message }: Props) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
      <p>
        First nameeee: <b>{firstName}</b>
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
      <div style={{ width: "100%", height: "1px", background: "#7d7d7d" }}></div>
      <p>{message}</p>
    </div>
  );
};
