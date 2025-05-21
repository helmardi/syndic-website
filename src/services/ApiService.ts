/**
 * ApiService
 * Handles all API calls to the backend Python Flask server
 */

// Base URL for API requests - would be set via environment variables in production
const API_BASE_URL = 'http://localhost:5000/api';

// Request headers
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

/**
 * Generic service to interact with the Python Flask backend
 */
export class ApiService {
  /**
   * Make a GET request to the API
   * @param endpoint - API endpoint to call
   * @param params - Optional query parameters
   * @returns Promise with the response data
   */
  static async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    
    if (params) {
      Object.keys(params).forEach(key => 
        url.searchParams.append(key, params[key])
      );
    }
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json() as Promise<T>;
  }
  
  /**
   * Make a POST request to the API
   * @param endpoint - API endpoint to call
   * @param data - Data to send in the request body
   * @returns Promise with the response data
   */
  static async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json() as Promise<T>;
  }
  
  /**
   * Make a PUT request to the API
   * @param endpoint - API endpoint to call
   * @param data - Data to send in the request body
   * @returns Promise with the response data
   */
  static async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json() as Promise<T>;
  }
  
  /**
   * Make a DELETE request to the API
   * @param endpoint - API endpoint to call
   * @returns Promise with the response data
   */
  static async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json() as Promise<T>;
  }
}

/**
 * Service for managing property-related API calls
 */
export class PropertyService {
  static async getProperties() {
    return ApiService.get<any[]>('/properties');
  }
  
  static async getPropertyById(id: string) {
    return ApiService.get<any>(`/properties/${id}`);
  }
  
  static async createProperty(propertyData: any) {
    return ApiService.post<any>('/properties', propertyData);
  }
}

/**
 * Service for managing user authentication
 */
export class AuthService {
  static async login(credentials: { email: string; password: string }) {
    return ApiService.post<{token: string; user: any}>('/auth/login', credentials);
  }
  
  static async register(userData: { email: string; password: string; name: string }) {
    return ApiService.post<{token: string; user: any}>('/auth/register', userData);
  }
  
  static async getUserProfile() {
    return ApiService.get<any>('/auth/profile');
  }
}

/**
 * Service for managing syndic-related API calls
 */
export class SyndicService {
  static async getBuildings() {
    return ApiService.get<any[]>('/syndic/buildings');
  }
  
  static async getResidents(buildingId: string) {
    return ApiService.get<any[]>(`/syndic/buildings/${buildingId}/residents`);
  }
  
  static async createAnnouncement(buildingId: string, announcement: any) {
    return ApiService.post<any>(`/syndic/buildings/${buildingId}/announcements`, announcement);
  }
}