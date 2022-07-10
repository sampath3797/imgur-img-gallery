import http from "./http-common";

export interface Image{
    data: {data : ImageDetails[]};
    success: boolean;
    status: number;
}

export interface ImageDetails {
    
        id: string;
        title: string;
        description: string;
        datetime:number;
        cover:string;
        cover_width:number;
        cover_height:number;
        account_url:string;
        account_id:number;
        privacy:string;
        layout:string;
        views:number;
        link:string;
        ups:number;
        downs:number;
        points:number;
        score:number;
        is_album:boolean;
        vote:string;
        favorite:boolean;
        nsfw:boolean;
        section:string;
        comment_count:number;
        favorite_count:number;
        topic:string;
        topic_id:string;
        images_count:number;
        in_gallery:boolean;
        is_ad:boolean;tags:string[];ad_type:number;ad_url:string;in_most_viral:boolean;include_album_ads:boolean;
        images: imageData[];
        ad_config:IConfig;
}


export interface imageData{
    
        id:string;
        title:string;
        description:string;
        datetime:number;
        type:string;
        animated:boolean;
        width:number;
        height:number;
        size:number;
        views:number;
        bandwidth:number;
        vote:string;
        favorite:boolean;
        nsfw:string;
        section:string;
        account_url:string;
        account_id:string;
        is_ad:boolean;
        in_most_viral:boolean;
        has_sound:boolean;
        tags:[];
        ad_type:number;
        ad_url:string;
        edited:number;
        in_gallery:boolean;
link:string;
comment_count:string;
favorite_count:string;
ups:string;
downs:string;
points:string;
score:string
}

export interface IConfig{
    safeFlags:string[];
    highRiskFlags:string[];
    unsafeFlags:string[];
    wallUnsafeFlags:string[];
    showsAds:boolean;
    showAdLevel:number
}


export class ThumbnailService {
    retrieveAllThumbnails(section: string, sort: string, wndow: string):any{
       return http.get<Array<Image>>(`/${section}/${sort}/${wndow}.json`);
    }
}

export default new ThumbnailService
