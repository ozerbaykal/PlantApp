export interface OptionCardProps {
    thisOption: 'option1' | 'option2';
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<'option1' | 'option2' | null>>;
    title: string;
    subtitle: string;
    isGradient?: boolean;
    showSaveLabel?: boolean;
  }
  