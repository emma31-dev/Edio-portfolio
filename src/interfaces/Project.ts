export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: 'logo' | 'flier' | 'other';
  description?: string;
}
