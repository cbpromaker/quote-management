import { UserInfo, Estimate, Specification } from '../types';

// 로그인 관련 API
export const authAPI = {
  login: async (username: string, password: string): Promise<UserInfo> => {
    // 실제 구현에서는 서버와 통신
    throw new Error('Not implemented');
  },

  logout: async (): Promise<void> => {
    throw new Error('Not implemented');
  },

  updateUserInfo: async (username: string): Promise<void> => {
    throw new Error('Not implemented');
  },
};

// 견적서 관련 API
export const estimateAPI = {
  // 견적서 목록 조회
  getEstimates: async (): Promise<Estimate[]> => {
    throw new Error('Not implemented');
  },

  // 새 견적서 생성
  createEstimate: async (
    estimate: Omit<Estimate, 'id' | 'createAt' | 'lastModified'>,
  ): Promise<Estimate> => {
    throw new Error('Not implemented');
  },

  // 견적서 수정
  updateEstimate: async (
    estimateId: number,
    updates: Partial<Estimate>,
  ): Promise<Estimate> => {
    throw new Error('Not implemented');
  },

  // 견적서 삭제
  deleteEstimate: async (estimateId: number): Promise<void> => {
    throw new Error('Not implemented');
  },
};

// 명세서 관련 API
export const specificationAPI = {
  // 명세서 목록 조회
  getSpecifications: async (): Promise<Specification[]> => {
    throw new Error('Not implemented');
  },

  // 견적서를 명세서로 전환
  convertToSpecification: async (
    estimateId: number,
    paymentMethod: 'card' | 'taxInvoice',
  ): Promise<Specification> => {
    throw new Error('Not implemented');
  },

  // 명세서 발급 취소
  cancelSpecification: async (specificationId: number): Promise<void> => {
    throw new Error('Not implemented');
  },
};

// 파일 다운로드 관련 API
export const fileAPI = {
  // PDF 다운로드
  downloadPDF: async (
    id: number,
    type: 'estimate' | 'specification',
  ): Promise<Blob> => {
    throw new Error('Not implemented');
  },

  // Excel 다운로드
  downloadExcel: async (
    id: number,
    type: 'estimate' | 'specification',
  ): Promise<Blob> => {
    throw new Error('Not implemented');
  },
};
