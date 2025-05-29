
export interface Questions {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}



export interface QuestionState {
  questions: Questions[];
  loading: boolean;
  error: string | null;
}
