export type ProjectDetailModalType = {
  project: {
    image: any;
    title: string;
    description: string;
    objectives?: string[];
    challenges?: string[];
    techStacks: string[];
    isGitHub: boolean;
    isLiveDemo: boolean;
    github: string;
    liveDemo: string;
  };
  children: ReactNode;
};
