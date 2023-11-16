const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-pink-200 self-end mr-4 p-2 rounded-lg shadow-lg whitespace-pre-wrap">{question}</div>
      <div className="bg-purple-100 self-start ml-4 mr-20 p-2 rounded-lg shadow-lg whitespace-pre-wrap">{answer}</div>
    </li>
  );
};

export default ChatCard;
