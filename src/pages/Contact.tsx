import { useState } from "react";
import Button from "../components/UI/Button";
import { buttonsClasses } from "../components/UI/buttonClasses";

const Contact = () => {
  const [primaryButton, setPrimaryButton] = useState(false);
  const [secondaryButton, setSecondaryButton] = useState(true);

  return (
    <div>
      <h1>Contact</h1>
      <section className="">
        <h1>Zamowienie</h1>
        <div className="flex">
          {/* //icon phone here */}
          <p>+</p>
          <h3>zadzwon i zamow</h3>
        </div>
        <p>Number</p>
      </section>
      <section>
        <Button
          className={buttonsClasses.buttonMap.class}
          disabled={primaryButton}
          children="Morena"
          onClick={() =>
            primaryButton === false &&
            (setPrimaryButton(true), setSecondaryButton(false))
          }
        />
        <Button
          className={buttonsClasses.buttonMap.class}
          disabled={secondaryButton}
          children="Garnizon"
          onClick={() =>
            secondaryButton === false &&
            (setPrimaryButton(false), setSecondaryButton(true))
          }
        />
        {primaryButton === true ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37195.01029129651!2d18.530518031249997!3d54.36249159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd748a362f70e7%3A0x929d622431c59d6b!2sW%C5%82oszczyzna%20Morena!5e0!3m2!1suk!2spl!4v1732220749636!5m2!1suk!2spl"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37195.01029129651!2d18.530518031249997!3d54.36249159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75dc5b6675bf%3A0xd64d06866c6d9b54!2sW%C5%82oszczyzna%20Garnizon!5e0!3m2!1suk!2spl!4v1732221340854!5m2!1suk!2spl"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </section>
    </div>
  );
};

export default Contact;
