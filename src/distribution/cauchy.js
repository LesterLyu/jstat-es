import { randn } from "./special";

export function pdf(x, local, scale) {
  if (scale < 0) {
    return 0;
  }

  return (scale / (Math.pow(x - local, 2) + Math.pow(scale, 2))) / Math.PI;
}

export function cdf(x, local, scale) {
  return Math.atan((x - local) / scale) / Math.PI + 0.5;
}

export function inv(p, local, scale) {
  return local + scale * Math.tan(Math.PI * (p - 0.5));
}

export function median(local/*, scale*/) {
  return local;
}

export function mode(local/*, scale*/) {
  return local;
}

export function sample(local, scale) {
  return randn() *
    Math.sqrt(1 / (2 * randg(0.5))) * scale + local;
}
