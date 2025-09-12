// 영화 객체 인터페이스
export interface Movie {
  adult: boolean;                    // 성인 콘텐츠 여부
  backdrop_path: string | null;      // 배경 이미지 경로
  genre_ids: number[];               // 장르 ID 배열
  id: number;                        // 영화 ID
  original_language: string;         // 원본 언어 코드 (e.g., 'en')
  original_title: string;            // 원본 제목
  overview: string;                  // 영화 개요
  popularity: number;                // 인기 지수
  poster_path: string | null;        // 포스터 이미지 경로
  release_date: string;              // 개봉일 (e.g., '2025-07-29')
  title: string;                     // 제목
  video: boolean;                    // 비디오 여부 (트레일러 등)
  vote_average: number;              // 평균 평점
  vote_count: number;                // 투표 수
}

// 인기 영화 목록 응답 인터페이스
export interface PopularMoviesResponse {
  page: number;                      // 현재 페이지
  results: Movie[];                  // 영화 목록 배열
  total_pages: number;               // 총 페이지 수
  total_results: number;             // 총 결과 수
}