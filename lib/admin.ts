export function isAdminProfile(profile: { role?: string } | null | undefined) {
    return !!(profile && profile.role === 'admin');
}

export function requireAdminClient(profile: { role?: string } | null | undefined) {
    if (!isAdminProfile(profile)) throw new Error('Admin privileges required');
    return true;
}
