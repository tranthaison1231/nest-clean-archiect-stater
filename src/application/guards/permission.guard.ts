import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { User } from '@prisma/client';

export enum Permission {
	ManagePermission = 'manage-permission',
}

interface RequestWithUser extends Request {
	user: User & {
		userRoles: {
			role: { rolePermissions: { permission: { name: Permission } }[] };
		}[];
	};
}

export const PermissionGuard = (
	requiredPermission: Permission,
): Type<CanActivate> => {
	class PermissionGuardMixin implements CanActivate {
		canActivate(context: ExecutionContext) {
			const request = context.switchToHttp().getRequest<RequestWithUser>();
			const user = request.user;

			const permissions = [
				...new Set(
					user.userRoles.flatMap((userRole) =>
						userRole.role.rolePermissions.map(
							(rolePermission) => rolePermission.permission.name,
						),
					),
				),
			];

			return permissions.includes(requiredPermission);
		}
	}

	return mixin(PermissionGuardMixin);
};
