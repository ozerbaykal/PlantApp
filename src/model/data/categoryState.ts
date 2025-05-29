


export interface Category{
  id: number;
  name: string;
  title: string;
  rank: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
}
export interface CategoryState{
    categories:Category[]
    loading:boolean,
    error:string |null
}