import FullCalendar from "@fullcalendar/react";
import { RefObject } from "react";

export type calendarRef = RefObject<FullCalendar | null>;

// setting earliest / latest available time in minutes since Midnight
export const earliestTime = 540;
export const latestTime = 1320;

export const months = [
  {
    value: "1",
    label: "January",
  },
  {
    value: "2",
    label: "February",
  },
  {
    value: "3",
    label: "March",
  },
  {
    value: "4",
    label: "April",
  },
  {
    value: "5",
    label: "May",
  },
  {
    value: "6",
    label: "June",
  },
  {
    value: "7",
    label: "July",
  },
  {
    value: "8",
    label: "August",
  },
  {
    value: "9",
    label: "September",
  },
  {
    value: "10",
    label: "October",
  },
  {
    value: "11",
    label: "November",
  },
  {
    value: "12",
    label: "December",
  },
];

const getRandomDays = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const currentDate = new Date();

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  backgroundColor?: string;
  description: string;
}

export const initialEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "keploy Standup Meeting",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      12,
      15
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      13,
      0
    ),
    backgroundColor: "#AEC6E4",
    description: "This is a daily meeting to go over today's tasks.",
  },
  {
    id: "2",
    title: "Lunch",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
      16,
      30
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
      17,
      30
    ),
    backgroundColor: "#FFD1DC",
    description: "Lunch at toast master HSR",
  },
  {
    id: "3",
    title: "GSoC Sync Up - Security and Performance Testing",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      18,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      18,
      45
    ),
    backgroundColor: "#B2E0B2",
    description: "Weekly GSoC Project Sync up with Yaten(mentee), Aditya(fellow mentor) and Kunal(fellow mentor).",
  },
  {
    id: "4",
    title: "Keploy API Fellowship Host",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 3,
      8,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 3,
      18,
      45
    ),
    backgroundColor: "#FFB3BA",
    description: "Hosting an API Fellowship Session On Ollama Models",
  },
  {
    id: "5",
    title: "GSoC Sync - App dashboard with metrics",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 5,
      10,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 5,
      15,
      30
    ),
    backgroundColor: "#FFDFBA",
    description:
      "Sync up with Swapnendu(mentee), Hermione(fellow mentor) and Tvisha(Fellow mentor)",
  },
  {
    id: "6",
    title: "API Fellowship Session Host",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(20, 24),
      9,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(25, 29),
      15,
      0
    ),
    backgroundColor: "#B9FBC0",
    description: "Planning, executing and Hosting an api fellowship session on how to contribute to open source",
  },
  {
    id: "7",
    title: "GSoC Sync - Blog Website",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(30, 34),
      18,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(35, 39),
      20,
      0
    ),
    backgroundColor: "#C3B1E1",
    description: "GSoC weekly sync with Yaten(mentee), Manas(fellow mentor)",
  },
  {
    id: "8",
    title: "API Fellowship Hosting",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(40, 44),
      14,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(45, 49),
      16,
      0
    ),
    backgroundColor: "#B2E7E0",
    description: "API Fellowship Session, planning, execution and Hosting on the topic of fullstack applications",
  },
  {
    id: "9",
    title: "Weekly Sync Up With the team",
    start: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(50, 54),
      19,
      0
    ),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + getRandomDays(55, 59),
      22,
      0
    ),
    backgroundColor: "#F6C9D8",
    description: "A sync up with the entire team to discuss things and have fun.",
  },
];
