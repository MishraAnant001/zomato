import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const service = inject(TokenService)
  if(!service.getToken()){
    router.navigateByUrl("/auth")
    return false
  }
  return true;
};
