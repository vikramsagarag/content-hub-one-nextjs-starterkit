import{MediaResults} from "../Common/media-type";

type Speaker = {
  id: string
  name: string
  speakerName: string
  speakerBio: string
  speakerImage: MediaResults
// Content Hub ONE stores images as a list. This is a data type of a list of media assets.
 }

export default Speaker

export type SpeakerResults = {
 total: string;
 results: Speaker[];
}