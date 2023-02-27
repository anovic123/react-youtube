type ThumbnailsProps = {
  url: string;
  width: string;
  height: string;
};

type AvatarProps = {
  url: string;
  width: number;
  height: number;
};

export interface DataProps {
  data: {
    video: {
      descriptionSnippet: string;
      lengthSeconds: number;
      title: string;
      videoId: string;
      thumbnails: ThumbnailsProps[];
      author: {
        avatar: AvatarProps[];
        title: string;
        channelId: string;
      };
    };
  };
}