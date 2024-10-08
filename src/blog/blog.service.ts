import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }
    
    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
      const newPost = await this.postModel.create(createPostDTO);
      return newPost.save();
    }  
      

    async getPostById(postID): Promise<Post> {
        const post = await this.postModel
          .findById(postID)
          .exec();
        return post;
    }

    async getAllPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }
    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndDelete(postID);
        return deletedPost;
    }
}
