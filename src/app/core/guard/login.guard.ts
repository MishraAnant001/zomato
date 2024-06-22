import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const service = inject(TokenService)
  const location = inject(Location)
  if(service.getToken()){
    location.back()
    return false
  }
  return true;
};
