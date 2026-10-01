export interface BlogPostMeta {
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  department: string;
  readTime: string;
  publishDate: string;
  wordCount: number;
  academicLevel: string;
  abstract: string;
}

export interface SectionItem {
  id: string;
  title: string;
  shortTitle: string;
  number: string;
}

export interface ComparisonRow {
  parameter: string;
  lexiconBased: string;
  machineLearning: string;
  deepLearning: string;
}

export interface AcademicReference {
  id: number;
  authors: string;
  year: number;
  title: string;
  source: string;
  doiOrUrl?: string;
  annotation: string;
}

export interface VisualDiagramSpec {
  id: number;
  title: string;
  description: string;
  keyComponents: string[];
}

export interface TokenAnalysis {
  word: string;
  stemOrLemma: string;
  score: number;
  isNegation?: boolean;
  isStopword?: boolean;
  isAspect?: boolean;
}

export interface AnalysisResult {
  text: string;
  classification: 'Positive' | 'Negative' | 'Neutral';
  score: number; // -1.0 to +1.0
  confidence: number; // 0 to 100%
  tokens: TokenAnalysis[];
  detectedAspects: Array<{
    aspect: string;
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    score: number;
    description: string;
  }>;
  explanation: string;
}
