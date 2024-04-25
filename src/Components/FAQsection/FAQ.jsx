import React, { useEffect, useState } from "react";
import FAQImage from "../../../public/FAQImage.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function FAQ() {
  const [toggleValue, settoggleValue] = useState(null);
  const faq = [
    {
      id: 0,
      title: "Can education flashcards be used for all age groups?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem uat eum cupiditate? Corporis, adipisci iusto! Laboriosam adlaudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate quis nemo molestiae facilis vero abinventore enim? Aliquam, omnis fugiat.laudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate.",
    },
    {
      id: 1,
      title: "Can education flashcards be used for all age groups?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem uat eum cupiditate? Corporis, adipisci iusto! Laboriosam adlaudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate quis nemo molestiae facilis vero abinventore enim? Aliquam, omnis fugiat.laudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate.",
    },
    {
      id: 2,
      title: "Can education flashcards be used for all age groups?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem uat eum cupiditate? Corporis, adipisci iusto! Laboriosam adlaudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate quis nemo molestiae facilis vero abinventore enim? Aliquam, omnis fugiat.laudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate.",
    },
    {
      id: 3,
      title: "Can education flashcards be used for all age groups?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem uat eum cupiditate? Corporis, adipisci iusto! Laboriosam adlaudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate quis nemo molestiae facilis vero abinventore enim? Aliquam, omnis fugiat.laudantium, adipisci aperiam quidem incidunt sapiente quiasimilique, eos odit cupiditate.",
    },
  ];

  const Togglediv = (index) => {
    settoggleValue((prevValue) => (prevValue === index ? null : index));
  };

  return (
    <div className="mt-40">
      <div className=" flex justify-center md:justify-normal md:flex-none">
        <img src={FAQImage} alt="" />
      </div>
      <div className="flex flex-col mt-12 gap-8">
        {faq.map((quetion, index) => (
          <div
            key={index}
            onClick={() => Togglediv(index)}
            className="flex flex-col justify-between border-2 border-[#175BCC] py-5 px-6 font-semibold rounded-xl"
          >
            <div className={`flex justify-between`}>
              <p className="text-xl">{quetion.title}</p>
              {index === toggleValue ? (
                <KeyboardArrowUpIcon className="text-xl" />
              ) : (
                <KeyboardArrowDownIcon className="text-xl" />
              )}
            </div>
            <div
              className={`${index === toggleValue ? "block" : "hidden"} mt-4`}
            >
              {quetion.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
