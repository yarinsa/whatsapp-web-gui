export interface ConversationsList {
    conversations: Conversation[];
}

export interface Conversation {
    id: string;
    title: string;
    imageUrl: string;
    messages: Message[];
    participants: Participant[];
}

export interface ConversationPreview {
    imageUrl: string;
    title: string;
    unreadCount: number;
    time: Date;
    content: string;
}
export interface Message {
    readAt: Date | null;
    sentAt: Date;
    by: string; //phone number
    content: string;
    type: string;
}

export interface Participant {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
}
