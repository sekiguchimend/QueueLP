export interface ApplicationFormData {
  job_id: string;
  personal_info: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  cover_letter: string;
}

export interface ApplicationError {
  message: string;
}

export type ApplicationStatus = "pending" | "reviewing" | "accepted" | "rejected";

export interface Application {
  id: string;
  job_id: string;
  personal_info: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  cover_letter: string;
  created_at: string;
  updated_at: string;
  status: ApplicationStatus;
} 