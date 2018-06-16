export interface Profile {
    last_name: string,
    first_name: string,
    patronymic: string,
    passport_series: string,
    passport_number: string,
    structural_unit: string,
    head_of_department: string;
    email: string
    student_profile: StudentProfile,
    collaborator_profile: CollaboratorProfile
}

interface StudentProfile {
    course: string,
    group: string,
}

interface CollaboratorProfile {
    position: string;
}
