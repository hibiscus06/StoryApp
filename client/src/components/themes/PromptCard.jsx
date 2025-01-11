import React from "react";

const PromptCard = () => {
  const data = [
    {
      title: "The Vanishing Train",
      description:
        "A late-night train disappears without a trace, leaving a lone passenger behind to uncover the truth.",
    },
    {
      title: "The Midnight Caller",
      description:
        "Every night at exactly midnight, a mysterious voice calls, revealing secrets only the protagonist knows.",
    },
    {
      title: "Whispers in the Woods",
      description:
        "A secluded cabin in the woods becomes the center of eerie whispers that seem to predict the future.",
    },
    {
      title: "The Forgotten Files",
      description:
        "An investigative journalist stumbles upon classified files that put their life in jeopardy.",
    },
    {
      title: "The Last Hike",
      description:
        "A group of friends hiking in the mountains finds an abandoned camp and a chilling journal detailing their own deaths.",
    },
    {
      title: "The Shadow's Pact",
      description:
        "A detective is tailed by a shadow that offers help solving cases but at a sinister price.",
    },
    {
      title: "The Cipher Code",
      description:
        "An old book with encrypted messages leads the protagonist into a deadly underground world.",
    },
    {
      title: "The Silent Witness",
      description:
        "A security camera catches a crime, but the footage reveals something impossible—a person vanishing into thin air.",
    },
    {
      title: "The Stranger’s Notebook",
      description:
        "After finding a stranger’s notebook in a café, the protagonist realizes it details events from their own life they haven’t yet lived.",
    },
    {
      title: "The Night Shift",
      description:
        "A hospital worker on the night shift notices that patients keep disappearing, leaving behind only their hospital bracelets.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center m-5">
        <h1 className="font-serif text-[4rem] text-custom-lightBlue">
          Prompts
        </h1>
        <div className="flex flex-wrap mx-[2rem] p-[2rem] justify-evenly rounded cursor-pointer">
          {data.map((item) => (
            <div className="text-custom-lightBlue flex m-[1rem] p-[1rem] justify-center items-center font-serif rounded text-[1.5rem] hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
              {item.title} : {item.description}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromptCard;
