

export interface Movie {
  name:        string;
  description: string;
  length:      string;
  imageUrl:    string;
}

export interface Category {
  name: string;
  movies: Movie[];
}
