import { supabase } from "@/integrations/supabase/client";
import { Application, ApplicationFormData, ApplicationStatus } from "@/types/application";

export async function createApplication(data: ApplicationFormData): Promise<Application | null> {
  try {
    const applicationData = {
      position: data.job_id,
      name: data.personal_info.name,
      email: data.personal_info.email,
      phone: data.personal_info.phone,
      employment_type: "full-time", // デフォルト値
      cover_letter: data.cover_letter,
      status: "pending" as ApplicationStatus,
      created_at: new Date().toISOString(),
    };

    const { data: application, error } = await supabase
      .from("job_applications")
      .insert([applicationData])
      .select()
      .single();

    if (error) {
      console.error("Error creating application:", error);
      return null;
    }

    return {
      id: application.id,
      job_id: application.position,
      personal_info: {
        name: application.name,
        email: application.email,
        phone: application.phone || "",
        address: "", // デフォルト値
      },
      cover_letter: application.cover_letter || "",
      created_at: application.created_at || new Date().toISOString(),
      updated_at: application.created_at || new Date().toISOString(),
      status: (application.status || "pending") as ApplicationStatus,
    };
  } catch (error) {
    console.error("Exception when creating application:", error);
    return null;
  }
}

export async function getApplicationById(id: string): Promise<Application | null> {
  try {
    const { data, error } = await supabase
      .from("job_applications")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching application:", error);
      return null;
    }

    return {
      id: data.id,
      job_id: data.position,
      personal_info: {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        address: "", // デフォルト値
      },
      cover_letter: data.cover_letter || "",
      created_at: data.created_at || new Date().toISOString(),
      updated_at: data.created_at || new Date().toISOString(),
      status: (data.status || "pending") as ApplicationStatus,
    };
  } catch (error) {
    console.error("Exception when fetching application:", error);
    return null;
  }
}

export async function updateApplication(id: string, data: ApplicationFormData): Promise<Application | null> {
  try {
    const applicationData = {
      position: data.job_id,
      name: data.personal_info.name,
      email: data.personal_info.email,
      phone: data.personal_info.phone,
      employment_type: "full-time", // デフォルト値
      cover_letter: data.cover_letter,
    };

    const { data: application, error } = await supabase
      .from("job_applications")
      .update(applicationData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating application:", error);
      return null;
    }

    return {
      id: application.id,
      job_id: application.position,
      personal_info: {
        name: application.name,
        email: application.email,
        phone: application.phone || "",
        address: "", // デフォルト値
      },
      cover_letter: application.cover_letter || "",
      created_at: application.created_at || new Date().toISOString(),
      updated_at: application.created_at || new Date().toISOString(),
      status: (application.status || "pending") as ApplicationStatus,
    };
  } catch (error) {
    console.error("Exception when updating application:", error);
    return null;
  }
} 