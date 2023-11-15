const ChatCard = ({ answer, question }) => {
  return (
    <li>
      <div>{answer}</div>
      <div>{question}</div>
    </li>
  );
};

export default ChatCard;
