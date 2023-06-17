import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <h1>Accordian Component</h1>
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      <ul>
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            key={el.title}
            num={i}
            title={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </ul>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  const showTextClassForList = isOpen ? "item open" : "item";

  function handleToggle() {
    onOpen((curNum) => (curNum === num ? null : num));
  }
  return (
    <li className={showTextClassForList} onClick={handleToggle}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </li>
  );
}
