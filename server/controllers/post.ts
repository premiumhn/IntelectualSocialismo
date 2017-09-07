import Post from '../models/post';
import BaseCtrl from './base';

export default class CatCtrl extends BaseCtrl {
  model = Post;
}