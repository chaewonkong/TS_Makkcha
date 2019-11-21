// Need to be amended

export interface ISimplePost {
    id: string | number;
    title: string;
    video_id: string;
    author: string;
    content: string;
}

export type IPosts =ISimplePost[]


export interface GetArticleRes {
    config: Object,
    data: ISimplePost,
    headers: Object,
    request?: Object,
    status: number,
    statusText: "OK" | any
  }
  
  export interface GetArticlesRes {
    config: Object,
    data: IPosts,
    headers: Object,
    request?: Object,
    status: number,
    statusText: "OK" | any
  }