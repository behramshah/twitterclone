import React from 'react';


interface TweetProps {
    text: string;
    classes: any;
    user: {
      fullname: string;
      username: string;
      avatarUrl: string;
    };
  }
  

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
  return (
    <div>
      tweet component
    </div>
  );
}
