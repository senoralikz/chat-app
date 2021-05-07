import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversations() {
  const { conversations } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item key={index}>
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
