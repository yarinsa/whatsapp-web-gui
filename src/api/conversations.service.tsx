import * as faker from 'faker';
import { Participant, Conversation, Message } from './conversations';

const KEY = 'conversations';
let conversationsList: Conversation[] = [];

export { getConversations, getById };

const getConversations = () => {
    const conversations: null | string = localStorage.getItem(KEY);
    if (conversations) {
        conversationsList = JSON.parse(conversations);
        return Promise.resolve<Conversation[]>(JSON.parse(conversations));
    } else {
        const conversationsList = _createConversations();
        localStorage.setItem(KEY, JSON.stringify(conversationsList));
        return Promise.resolve<Conversation[]>(conversationsList);
    }
};

const getById = (conversationId: string) => {
    const conversationIndex = conversationsList.findIndex((conversation) => conversationId === conversation.id);
    if (conversationIndex !== -1) {
        return Promise.resolve<Conversation>(conversationsList[conversationIndex]);
    } else {
        return Promise.reject('Cannot find conversation');
    }
};

const _createConversations = () => {
    const createMessages = (phoneNumbers: string[]) => {
        const readAtOptions = [faker.date.recent(), null];
        const contentOptions = [faker.lorem.sentences(Math.floor(Math.random() * 6 + 1)), faker.image.imageUrl()];
        return Array(30)
            .fill(null)
            .map(() => {
                const message: Message = {
                    readAt: faker.random.arrayElement(readAtOptions),
                    sentAt: faker.date.recent(),
                    by: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
                    content: faker.random.arrayElement(contentOptions),
                    type: '',
                };
                if (message.content.includes('http://lorempixel.com/')) {
                    message.type = 'image';
                } else {
                    message.type = 'text';
                }
                return message;
            });
    };

    const createParticipants = () => {
        const participantsAmount = Math.floor(Math.random() * 3 + 1);
        return Array(participantsAmount)
            .fill(null)
            .map(() => ({
                phoneNumber: faker.phone.phoneNumber(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                imageUrl: faker.image.avatar(),
            }));
    };
    const createConversation = () => {
        const participants: Participant[] = createParticipants();
        const messages: Message[] = createMessages(participants.map((participant) => participant.phoneNumber));
        const conversation: Conversation = {
            id: faker.random.uuid(),
            title: faker.name.firstName(),
            imageUrl: faker.image.avatar(),
            participants: participants,
            messages: messages,
        };
        console.log(conversation);
        return conversation;
    };
    const conversations = Array(20)
        .fill(null)
        .map(() => createConversation());
    console.log(conversations);
    return conversations;
};
