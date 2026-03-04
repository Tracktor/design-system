import { capitalize } from "@tracktor/react-utils";
import type { ChatParticipant } from "@/components/DataDisplay/Chat/types";

/**
 * Format a list of participants into a comma-separated string of capitalized first names (or last names as fallback).
 */
const formatParticipantNames = (participants?: ChatParticipant[] | null): string =>
  participants?.map(({ firstName, lastName }) => capitalize(firstName || lastName).trim()).join(", ") ?? "";

export default formatParticipantNames;
