import React from "react";
import TimelineStepper from "../components/TimelineStepper";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import Menu from "../components/Menu";

const ContactPage: React.FC = () => {
  const steps = [
    "Nous préparons une proposition",
    "Nous discutons ensemble",
    "Nous commençons",
  ];

  return (
    <div>
      <div className="container mx-auto mt-8">
        <Menu />
      </div>
      <h1 className="text-white bold text-center text-5xl mt-4">
        Contactez-nous
      </h1>
      <h4 className="text-white text-center text-lg m-10 mb-20">
        Pour toutes demandes de partenariat, d’informations, vous pouvez remplir
        le formulaire !
      </h4>
      <div className="mx-auto p-4 bg-[#E8E5E5] ml-2 mt-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 md:col-span-6">
            <div className="text-[#2A4466] text-2xl my-10">
              Quelle sera la prochaine étape?
            </div>
            <TimelineStepper steps={steps} />
          </div>
          <div className="col-span-6 md:col-span-6 ml-4 bg-white ">
            <form>
              <div className="container mx-auto mt-8">
                <InputField placeholder="Nom et Prénom" />
                <InputField placeholder="Email" />
                <InputField placeholder="Partenariat" />
                <TextareaField placeholder="Entrez votre messsage " />
              </div>

              <button
                className="bg-[#2A4466] text-white font-bold py-2 px-4 mb-4 ml-4 rounded"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-white bold text-center text-4xl mt-6">
        Où nous-trouver ?
      </h1>
    </div>
  );
};

export default ContactPage;
